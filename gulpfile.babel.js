import gulp     from 'gulp';
import plugins  from 'gulp-load-plugins';
import browser  from 'browser-sync';
import rimraf   from 'rimraf';
import panini   from 'panini';
import yargs    from 'yargs';
import lazypipe from 'lazypipe';
import inky     from 'inky';
import fs       from 'fs';
import siphon   from 'siphon-media-query';
import path     from 'path';
import merge    from 'merge-stream';
import beep     from 'beepbeep';
import colors   from 'colors';

const $ = plugins();


var Inky = require('inky').Inky;
var format = require('util').format;

Inky.prototype.componentLibrary.offerbutton = function (element) {
  var expander = '';
  var inner = element.html();

  // If we have the href attribute we can create an anchor for the inner of the button;
  if (element.attr('href')) {
    inner = format('<a class="btn offer-button__text" href="%s">%s</a>', element.attr('href'), inner);
  }

  // If the button is expanded, it needs a <center> tag around the content
  if (element.hasClass('expand') || element.hasClass('expanded')) {
    inner = format('<center>%s</center>', inner);
    expander = '\n<td class="expander"></td>';
  }

  // The .button class is always there, along with any others on the <button> element
  var classes = ['button'];
  if (element.attr('class')) {
    classes = classes.concat(element.attr('class').split(' '));
  }

  return format('<table class="btn offer-button__container %s"><tr><td><table><tr><td class="btn offer-button">%s</td></tr></table></td>%s</tr></table>', classes.join(' '), inner, expander);
};

Inky.prototype.componentLibrary.header = function (element) {
  var classes = [];
  if (element.attr('class')) {
    classes = classes.concat(element.attr('class').split(' '));
  }

  return format('<container class="%s header header__container"><row class="collapse meta"><columns small="6" large="6"><img src="http://cdn.ymaservices.com/email/global/header__sb-logo.jpg"></columns><columns small="6" large="6"><p class="text-right"><span class="show-for-large">Making life a little more awesome for millions of students<br>No images?</span><a href="#view"> View in browser</a></p></columns></row></container>', classes.join(' '), element.html());
};

Inky.prototype.componentLibrary.footer = function (element) {
  var classes = [];
  if (element.attr('class')) {
    classes = classes.concat(element.attr('class').split(' '));
  }

  return format('<container class="%s footer footer__container"><row class="meta"><columns small="2" large="2"></columns><columns small="9" large="9"><center><spacer size="40"></spacer><img src="http://cdn.ymaservices.com/email/global/footer__sb-logo.jpg"><spacer size="30"></spacer><p class="text-center">This message was sent by Student Beans. You are receiving this email because you have an existing relationship with Student Beans. Don\'t like great student freebies and competitions?</p><spacer size="20"></spacer><p class="text-center"><a class="neutral" href="#unsubscribe">Unsubscribe from this weekly newsletter</a> or <a class="neutral" href="#unsubscribe">manage your preferences</a>.</p><spacer size="20"></spacer><p class="text-center">Privacy is important to us. <a class="neutral" href="#policy">View our privacy policy</a>.</p><spacer size="20"></spacer><row><columns small="6" large="6"><a href=""><img class="float-right footer footer__facebook-icon" src="http://cdn.ymaservices.com/email/global/footer__facebook.jpg"></a></columns><columns small="6" large="6"><a href=""><img class="float-left footer footer__twitter-icon" src="http://cdn.ymaservices.com/email/global/footer__twitter.jpg"></a></columns></row></center></columns><columns small="2" large="2"></columns></row><row class="meta"><columns><spacer size="80"></spacer><p class="text-center">Registered Office:1 Vincent Square, London, SW1 2PN | Registered as a company in England and Wales, number: 5486885 | VAT Registration Number: 873 0262 33. Copyright 2014 Student Beans all rights reserved.</p></columns></row></container>', classes.join(' '), element.html());
};

// Look for the --production flag
const PRODUCTION = !!(yargs.argv.production);

// Declar var so that both AWS and Litmus task can use it.
var CONFIG;

// Build the "dist" folder by running all of the above tasks
gulp.task('build',
  gulp.series(clean, pages, sass, images, inline));

// Build emails, run the server, and watch for file changes
gulp.task('default',
  gulp.series('build', server, watch));

// Build emails, then send to litmus
gulp.task('litmus',
  gulp.series('build', creds, aws, litmus));

// Build emails, then zip
gulp.task('zip',
  gulp.series('build', zip));

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf('dist', done);
}

// Compile layouts, pages, and partials into flat HTML files
// Then parse using Inky templates
function pages() {
  return gulp.src('src/pages/**/*.html')
    .pipe(panini({
      root: 'src/pages',
      layouts: 'src/layouts',
      partials: 'src/partials',
      helpers: 'src/helpers'
    }))
    .pipe(inky({
      components: {
        offerbutton: 'offerbutton',
        header: 'header',
        footer: 'footer'
      }
    }))
    .pipe(gulp.dest('dist'));
}

// Reset Panini's cache of layouts and partials
function resetPages(done) {
  panini.refresh();
  done();
}

// Compile Sass into CSS
function sass() {
  return gulp.src('src/assets/scss/app.scss')
    .pipe($.if(!PRODUCTION, $.sourcemaps.init()))
    .pipe($.sass({
      includePaths: ['node_modules/foundation-emails/scss']
    }).on('error', $.sass.logError))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest('dist/css'));
}

// Copy and compress images
function images() {
  return gulp.src('src/assets/img/**/*')
    .pipe($.imagemin())
    .pipe(gulp.dest('./dist/assets/img'));
}

// Inline CSS and minify HTML
function inline() {
  return gulp.src('dist/**/*.html')
    .pipe($.if(PRODUCTION, inliner('dist/css/app.css')))
    .pipe(gulp.dest('dist'));
}

// Start a server with LiveReload to preview the site in
function server(done) {
  browser.init({
    server: 'dist'
  });
  done();
}

// Watch for file changes
function watch() {
  gulp.watch('src/pages/**/*.html').on('change', gulp.series(pages, inline, browser.reload));
  gulp.watch(['src/layouts/**/*', 'src/partials/**/*']).on('change', gulp.series(resetPages, pages, inline, browser.reload));
  gulp.watch(['../scss/**/*.scss', 'src/assets/scss/**/*.scss']).on('change', gulp.series(resetPages, sass, pages, inline, browser.reload));
  gulp.watch('src/assets/img/**/*').on('change', gulp.series(images, browser.reload));
}

// Inlines CSS into HTML, adds media query CSS into the <style> tag of the email, and compresses the HTML
function inliner(css) {
  var css = fs.readFileSync(css).toString();
  var mqCss = siphon(css);

  var pipe = lazypipe()
    .pipe($.inlineCss, {
      applyStyleTags: false,
      removeStyleTags: false,
      removeLinkTags: false
    })
    .pipe($.replace, '<!-- <style> -->', `<style>${mqCss}</style>`)
    .pipe($.htmlmin, {
      collapseWhitespace: true,
      minifyCSS: true
    });

  return pipe();
}

// Ensure creds for Litmus are at least there.
function creds(done) {
  var configPath = './config.json';
  try { CONFIG = JSON.parse(fs.readFileSync(configPath)); }
  catch(e) {
    beep();
    console.log('[AWS]'.bold.red + ' Sorry, there was an issue locating your config.json. Please see README.md');
    process.exit();
  }
  done();
}

// Post images to AWS S3 so they are accessible to Litmus test
function aws() {
  var publisher = !!CONFIG.aws ? $.awspublish.create(CONFIG.aws) : $.awspublish.create();
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return gulp.src('./dist/assets/img/*')
    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a cache file to speed up consecutive uploads
    //.pipe(publisher.cache())

    // print upload updates to console
    .pipe($.awspublish.reporter());
}

// Send email to Litmus for testing. If no AWS creds then do not replace img urls.
function litmus() {
  var awsURL = !!CONFIG && !!CONFIG.aws && !!CONFIG.aws.url ? CONFIG.aws.url : false;

  return gulp.src('dist/**/*.html')
    .pipe($.if(!!awsURL, $.replace(/=('|")(\/?assets\/img)/g, "=$1"+ awsURL)))
    .pipe($.litmus(CONFIG.litmus))
    .pipe(gulp.dest('dist'));
}

// Copy and compress into Zip
function zip() {
  var dist = 'dist';
  var ext = '.html';

  function getHtmlFiles(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        var fileExt = path.join(dir, file);
        var isHtml = path.extname(fileExt) == ext;
        return fs.statSync(fileExt).isFile() && isHtml;
      });
  }

  var htmlFiles = getHtmlFiles(dist);

  var moveTasks = htmlFiles.map(function(file){
    var sourcePath = path.join(dist, file);
    var fileName = path.basename(sourcePath, ext);

    var moveHTML = gulp.src(sourcePath)
      .pipe($.rename(function (path) {
        path.dirname = fileName;
        return path;
      }));

    var moveImages = gulp.src(sourcePath)
      .pipe($.htmlSrc({ selector: 'img'}))
      .pipe($.rename(function (path) {
        path.dirname = fileName + '/assets/img';
        return path;
      }));

    return merge(moveHTML, moveImages)
      .pipe($.zip(fileName+ '.zip'))
      .pipe(gulp.dest('dist'));
  });

  return merge(moveTasks);
}
