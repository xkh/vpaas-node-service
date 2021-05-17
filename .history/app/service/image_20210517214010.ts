import { Service } from 'egg';

/**
 * Test Service
 */
export default class Image extends Service {

  /**
   * componentImage to you
   * @param name - your name
   */
  public async componentImage(name: string, id: string) {
    return {
      fields: {
        id: 'xxxasasaqwqwq-' + id,
        src: {
          label: "图片地址" + name,
          defaultValue: "http://resume.xonepage.com/img/xkh.63d61646.jpg",
          type: "text",
          required: true,
        },
        link: {
          label: "图片跳转地址" + name,
          defaultValue: "https://github.com/xkh",
          type: "text",
          required: true,
        }
      }
    };
  }

}
