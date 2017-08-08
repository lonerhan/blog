/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    config.toolbar =   'Basic';
    config.toolbar_Basic =  [
      [
      'Format', 'Font', 'FontSize', 
      'TextColor', 'BGColor', 'Bold', 'Italic', 'Underline', '-', 
      'NumberedList', 'BulletedList', '-', 
      'JustifyLeft', 'JustifyCenter', 'JustifyRight',
      'Link', 'RemoveFormat', 'addpic', 'Table', '-',
      'Undo', 'Redo', '-',
      'Maximize']
    ];
    config.resize_enabled =  false,
    config.skin = 'moono-lisa';
    config.allowedContent=true;
    config.extraPlugins = 'addpic,imagepaste,uploadimage';
    config.resize_enabled = true;
    config.resize_maxHeight = 700;
};
