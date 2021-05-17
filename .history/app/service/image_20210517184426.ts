import { Service } from 'egg';

/**
 * Test Service
 */
export default class Image extends Service {

  /**
   * componentOne to you
   * @param name - your name
   */
  public async componentOne(name: string, id: string) {
    return {
      fields: {
        id: 'xxxasasaqwqwq-' + id,
        src: {
          label: "图片地址" + name,
          defaultValue: "http://resume.xonepage.com/img/xkh.63d61646.jpg",
          type: "text"
        },
        link: {
          label: "图片跳转地址" + name,
          defaultValue: "https://github.com/xkh",
          type: "text"
        }
      }
    };
  }

  /**
 * componentOne to you
 * @param name - your name
 */
  public async componentTwo(name: string, id='000') {
    return {
      fields: {
        id: 'xxxasasaqwqwq-002'+id,
        src: {
          label: "图片地址" + name,
          defaultValue: "http://resume.xonepage.com/img/xkh.63d61646.jpg",
          type: "text"
        },
        link: {
          label: "图片跳转地址" + name,
          defaultValue: "https://github.com/xkh",
          type: "text"
        }
      }
    };
  }
}
