module.exports = function (grunt, pkg, opts) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    'changelog': {
      dest: './report/changelog/changelog.html',
      options: {
        'gitUrlForCommit': 'http://git.kno.com/?p=cloud/kno-web-lib.git;a=commit;h={0}',
        'gitAuthorUrl': 'http://git.kno.com/?p=cloud/kno-web-lib.git;a=search;s={0};st=author',
        'urlForBugId': 'https://rally1.rallydev.com/#/search?keywords={0}'
      }
    }
  };
};