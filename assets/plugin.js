require([ 'gitbook' ], function (gitbook) {
    gitbook.events.bind('start', function (e, config) {
        var gitlabURL = config.gitlab.url;

        gitbook.toolbar.createButton({
            icon: 'fa fa-gitlab',
            label: 'GitLab',
            position: 'right',
            onClick: function() {
                window.open(gitlabURL)
            }
        });
    });
});
