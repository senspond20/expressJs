console.log('test');

function LoadImg(value, num) {

    // 이미지(jps,jpeg,png) 파일인지 체크하기 위한 정규표현식
    var imgReg = /(.*?)\.(jpg|jpeg|png)$/;
    // 한글이 있는지 체크
    var kerReg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    if (value.files && value.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            switch (num) {
                case 1:
                    $("#titleImg1").attr("src", e.target.result);
                    break;
                case 2:
                    $("#titleImg2").attr("src", e.target.result);
                    break;
            }
        }
        reader.readAsDataURL(value.files[0]);
    }
}

$(document).ready(function () {
    $('#summernote').summernote({
        height: 450,
        minHeight: null,
        maxHeight: null,
        focus: true,
        callbacks: {
            onImageUpload: function (files, editor, welEditable) {
                for (var i = 0; i < files.length; i++) {
                    sendFile(files[i], this);
                }
            }
        }
    });
    cTitleReSize();
});

function cTitleReSize() {
    var width = $(window).width();
    var item = $('.cTitle+div');
    var cTitle = $('.cTitle');
    if (width < 765) {
        $('.cTitle').height(35);
    } else {
        cTitle.eq(0).height(item.eq(0).height());
        cTitle.eq(1).height(item.eq(1).height());
        cTitle.eq(2).height(item.eq(2).height());
    }
}
$(window).resize(function () {
    cTitleReSize();
})


function sendFile(file, el) {
    // jsp jpeg png 이미지 파일 확장자 정규표현식
    var imgReg = /(.*?)\.(jpg|jpeg|png)$/;
    var fileName = file.name;


    // 2. 정규표현식으로 업로드 파일이 이미지 확장자인지 체크
    if (!fileName.toLowerCase().match(imgReg)) {
        alert('경고 ! : .jpg / .jpeg / .png 확장자의 이미지 파일만 올려주세요. ');
        return false;
    } else {
        var form_data = new FormData();
        form_data.append('file', file);

        $.ajax({
            data: form_data,
            type: "POST",
            url: "/banner/upload.do",
            cache: false,
            contentType: false,
            enctype: 'multipart/form-data',
            processData: false,
            success: function (url) {
                console.log(url);

                var newURL = window.location.protocol + "//" + window.location.host + url;
                console.log(newURL);

                $(el).summernote('insertImage', newURL, function ($image) {
                    $image.css('width', "100%");
                });
            }
        });
    }
}

$('#cancel').on('click', function () {
    location.href = "javascript:history.go(-1)"
})