/*  Tests will run when DOM is ready
 */
$(function() {
    /*
     * Test suite for the RSS feed
     */
    describe('RSS Feeds', function() {
        /* This test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test to make sure that the
         * allFeeds object has a URL property and it's defined
         * and not empty.
         */
        it('URLs is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* This test to make sure that the
         * allFeeds object has a name property and it's defined
         * and not empty.
         */
        it('names is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    /*
     * Test suite for the menu
     */
    describe('The menu', function() {

        /* This test to make sure that the menu element is
         * hidden by default.
         */
        it('menu element is hidden by default', function() {
            expect($('body').attr('class')).toContain('menu-hidden');
        });

        /*This test to make sure that the menu changes
         * visibility when the menu icon is clicked.
         */
        it('hiding/opening menu is working', function() {
            //click on menu icon for open
            $('.menu-icon-link').trigger('click');
            expect($('body').attr('class')).not.toContain('menu-hidden');
            //close menu
            $('.menu-icon-link').trigger('click');
            expect($('body').attr('class')).toContain('menu-hidden');
        });
    });


    describe('Initial Entries', function() {

        /* This test to make sure that the feed is loaded correctly
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('feed is loaded', function() {
            //check that feed is loaded
            expect($('.feed').children().length).toBeGreaterThan(0);
        });
    });


    describe('New Feed Selection', function() {
        /* This test to make sure that the feed is updated correctly
         */
        let initialFeed;
        beforeEach(function(done) {
            loadFeed(0, function(done) {
                initialFeed = $('.feed').html();
            });
            //load next feed
            loadFeed(1, done);
        });

        it('feed is updated', function() {
            //compare two feeds
            expect($('.feed').html()).not.toBe(initialFeed);
        });
    });
}());
