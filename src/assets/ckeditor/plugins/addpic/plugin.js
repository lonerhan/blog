// 添加一个插件
CKEDITOR.plugins.add('addpic', {
    // 插件初始化
    init: function (editor) {
        // 添加code按钮
        editor.ui.addButton('addpic', {
            // 鼠标移到按钮提示文字
            label: '上传图片',
            // 命令
            command: 'addpic',
            // 图标（相对于插件本身目录下）
            icon: this.path + 'addpic.png',
            // 添加点击事件   
            click:function(){
                $('.mask, .upload-form').show();

                // 模拟点击选择文件
                $('#upload').unbind().on('click', function(event) {
                    $('#file').click();
                })

                //取消按钮
                $('#cancel, #clsoe-btn').on('click', function(event) {
                    var fileHTML  = document.getElementById('file');
                    $('.mask, .upload-form').hide();
                    fileHTML.outerHTML = file.outerHTML;
                    $('#file-name').val('');
                })

                $('#file').on('change', function(event) {
                    $('#file-name').val($("#file").val());
                })

                //上传
                $('#submit').unbind().on('click', function(event) {
                    var fileHTML = document.getElementById('file');
                    var file = fileHTML.files[0];
                    var type = fileHTML.title;
                    var formData = new FormData();
                    formData.append("file", file);
                    formData.append('fileType', type);
                    formData.append('fileSrc', '1');
                    $.ajax({
                        url: 'http://10.28.30.21/file/upload.do',
                        type: "POST",
                        beforeSend: function(request) {
                            request.setRequestHeader('accessToken', localStorage.getItem('tw_tech_accessToken'));
                        },
                        data: formData,
                        async: false,
                        cache: false,
                        contentType: false,  
                        processData: false,  
                        success: function (returndata) {
                            var data = JSON.parse(returndata);
                            var str = "<img src="+  data.url  + "></img>";
                            editor.insertHtml(str);
                            $('.mask, .upload-form').hide();
                            fileHTML.outerHTML = fileHTML.outerHTML;
                            $('#file-name').val('');
                        },  
                    })
                })
            }
        });
    }
});