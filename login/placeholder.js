jQuery(function($) {
    function supportsPlaceHolder() {
        return 'placeholder' in document.createElement('input') &&
        'placeholder' in document.createElement('textarea');
    }

    if (!supportsPlaceHolder()) {
        $('html').addClass('no-placeholder');
    }
});