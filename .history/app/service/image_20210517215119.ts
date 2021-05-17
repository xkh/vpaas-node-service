import { Service } from 'egg';

/**
 * Test Service
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
        src: {
          label: "图片名称" + name,
          defaultValue: "http://resume.xonepage.com/img/xkh.63d61646.jpg",
          type: "text",
          required: true,
          disable: false,
        },
        link: {
          label: "图片跳转地址" + name,
          defaultValue: "https://github.com/xkh",
          type: "text",
          required: true,
          disable: false,
        }
      }
    };
  }

}
