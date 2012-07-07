<script type="text/javascript">
   // jQuery(document).ready(function() {
   //     $('.carousel').carousel();
   // });
   jQuery('#cbox').jflickrfeed({
    limit: 100,
    qstrings: {
        id: '21471850@N04'
    },
    itemTemplate:
    '<li>' +
        '<a rel="colorbox" href="{{image_b}}" title="{{title}}">' +
            '<img src="{{image_s}}" alt="{{title}}" />' +
        '</a>' +
    '</li>'
}, function(data) {
    jQuery('#cbox a').colorbox();
});
</script>