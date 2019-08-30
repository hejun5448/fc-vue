/*
 * @Author: luohong
 * @Date: 2019-08-28 16:10:04
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-30 17:29:11
 * @Description: 
 * @email: 3300536651@qq.com
 */
import Vue from 'vue';
import 'jspdf'
require("./style.css")
import * as rasterizeHTML from 'rasterizehtml';
import html2canvas from 'html2canvas';
var app = new Vue({
    el: '#app',
    data: {
        message: '400000',
        name: '青成',
        editName: 'N' // 名字
    },
    methods: {
        exportPdf: function () {
            global.html2canvas = html2canvas; // 解决html2canvas is not a function的问题
            let element = document.getElementById('renderPdf'); // 这个dom元素是要导出pdf的div容器
            let w = element.offsetWidth; // 获得该容器的宽
            let h = element.offsetHeight; // 获得该容器的高
            let offsetTop = element.scrollTop; // 获得该容器到文档顶部的距离
            let offsetLeft = element.scrollLeft; // 获得该容器到文档最左的距离
            let canvas = document.createElement("canvas");
            let abs = 0;
            let win_i = window.offsetWidth; // 获得当前可视窗口的宽度（不包含滚动条）
            let win_o = window.scrollWidth; // 获得当前窗口的宽度（包含滚动条）
            if (win_o > win_i) {
                abs = (win_o - win_i) / 2; // 获得滚动条长度的一半
            }
            canvas.width = w * 2; // 将画布宽&&高放大两倍
            canvas.height = h * 2;
            let context = canvas.getContext("2d");
            context.scale(2, 2);
            context.translate(-offsetLeft - abs, -offsetTop);
            // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此        
            // translate的时候，要把这个差值去掉
            console.log(element, 'html2canvas')
            html2canvas(element).then(function (canvas) {
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;
                //一页pdf显示html页面生成的canvas高度;
                var pageHeight = contentWidth / 592.28 * 841.89;
                //未生成pdf的html页面高度
                var leftHeight = contentHeight;
                //页面偏移
                var position = 0;
                //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                var imgWidth = 595.28;
                var imgHeight = 592.28 / contentWidth * contentHeight;
                var pageData = canvas.toDataURL('image/jpeg', 1.0);
                let pdf = new jsPDF();
                //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                //当内容未超过pdf一页显示的范围，无需分页
                if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                } else { // 分页
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        //避免添加空白页
                        if (leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }
                pdf.save('在线编辑PDF.pdf');
            })
        }
    }
})