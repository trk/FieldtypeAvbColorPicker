$(document).ready(function() {
    var PwContentElement = $('#content');

    AvbColorPickerInit();

    // $(document).on('repeateradd', '.InputfieldRepeaterMatrix .InputfieldRepeaterMatrixAddLink', AvbColorPickerInsideRepeaterInit);
    $(document).on('opened', '.InputfieldRepeaterItem', AvbColorPickerInsideRepeaterInit);
    // $(document).on('openReady', '.InputfieldRepeaterItem', AvbColorPickerInsideRepeaterInit);

    if(PwContentElement.length) {
        PwContentElement.css(
            'z-index', 2
        );
    }
});

function AvbColorPickerInsideRepeaterInit() {
    var $item = $(this);
    var $loaded = $item.find(".InputfieldRepeaterLoaded");
    if(parseInt($loaded.val()) > 0) {
        AvbColorPickerInit();
    } else {
        setTimeout(function() {
            AvbColorPickerInit();
        }, 1000);
    }
}

function AvbColorPickerInit() {

    var AvbColorPicker = $(".AvbColorPicker"),
        AvbColorPickerLoadedClass = 'AvbColorPickerLoaded';

    AvbColorPicker.each(function() {
        var $this = $(this);
        if(!$this.hasClass(AvbColorPickerLoadedClass)) {
            $this.spectrum({
                change: function (color) {
                    // alert(color.toHexString());
                    $this.val(color.toHexString());
                }
            });
            if($this.parents('.InputfieldContent').length) {
                $this.parents('.InputfieldContent').css(
                    'z-index', 2
                );
            }
            $this.addClass(AvbColorPickerLoadedClass);
        }
    });
}