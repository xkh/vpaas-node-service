import { Service } from 'egg';

/**
 * Image Service
 */
export default class Image extends Service {

  /**
   * componentImage to you
   * @param name - your name
   */
  public async componentImage(name: string) {
    return {
      fields: {
        _id: 'x23121222321312',
        name: '图片组件',
        images: [
          {
            src: {
              label: "图片名称" + name,
              disable: false,
              default: "http://resume.xonepage.com/img/xkh.63d61646.jpg",
              type: "image",
              rules: {
                required: true,
                reg: "/\.(png|jpe?g|gif|svg)(\?.*)?$/",
                msg: "请输入图片地址",
              },
            },
            link: {
              label: "图片跳转地址" + name,
              disable: false,
              default: "https://github.com/xkh",
              type: "text",
              rules: {
                required: true,
                reg: "/(http|https):\/\/([\w.]+\/?)\S*/",
                msg: "地址格式错误",
              },
            }
          }
        ],
      }
    };
  }

}
