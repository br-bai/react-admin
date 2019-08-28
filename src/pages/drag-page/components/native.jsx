import React from 'react';
import uuid from "uuid/v4";

export const category = '原生HTML元素';

export const icon = 'html5';

export default {
    text: {
        component: 'text',
        title: '纯文本',
        visible: false,
        noWrapper: true, // 直接渲染，不拖拽包裹
        defaultProps: {
            content: '纯文本',
        },
        render: props => props.content,
        toSource: props => props.content,
    },
    tip: {
        component: 'div',
        title: '额外说明',
        toSource: props => {
            const {children: [{content}]} = props;
            return `{/* TODO ${content} */}`;
        },
        description: (
            <div>
                <div>一般可以用来添加一些额外的说明，给开发人员一些提示。</div>
                <div>生成代码时，将会转换成注释。</div>
            </div>
        ),
        defaultProps: {
            style: {
                padding: 8,
                border: '1px dashed #ffa39e',
                background: '#fff1f0',
                wordBreak: 'break-all',
                overflowWrap: 'break-word',
            },
            children: [
                {
                    __type: 'text',
                    __id: uuid(),
                    content: '额外说明：',
                },
            ],
        },
    },
    span: {
        component: 'span',
        title: '行内元素',
        display: 'inline-block', // 如果使用inline，布局会有些问题，这里使用inline-block
        defaultProps: {
            children: [
                {
                    __type: 'text',
                    __id: uuid(),
                    content: '行内元素（span）',
                }
            ],
        },
    },
    div: {
        component: 'div',
        title: '块级元素',
        container: true,
        defaultProps: {
            style: {
                minHeight: 30,
                minWidth: 50,
            },
            children: [
                {
                    __type: 'text',
                    __id: uuid(),
                    content: '块级元素（div）',
                }
            ],
        },
    },
    divInline: {
        component: 'div',
        title: '行内块级元素',
        container: true,
        display: 'inline-block',
        defaultProps: {
            style: {
                display: 'inline-block',
                minHeight: 30,
                minWidth: 50,
            },
            children: [
                {
                    __type: 'text',
                    __id: uuid(),
                    content: '行内块级元素（div）',
                }
            ],
        },
    },
};
