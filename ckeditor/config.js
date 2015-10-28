/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    config.allowedContent = true;
    config.language = 'zh-cn';
    config.skin = 'minimalist';
    config.pasteFilter = null;
    config.forcePasteAsPlainText = false;
    config.allowedContent = true;
    config.pasteFromWordRemoveFontStyles = false;
    config.pasteFromWordRemoveStyles = false;
    config.extraPlugins = 'floating-tools,notification,autosave,templates';


  config.toolbar = [
        {name: 'document', items: ['Preview', 'Templates']},
        {name: 'clipboard', items: ['Undo', 'Redo']},
        {
            name: 'basicstyles',
            items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
        },
        {
            name: 'paragraph',
            items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
                '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        },
        '/',
        {name: 'styles', items: ['Format', 'Font', 'FontSize']},
        {name: 'colors', items: ['TextColor', 'BGColor']},
        {name: 'tools', items: ['Maximize', 'ShowBlocks', 'Source']}
    ];
};
