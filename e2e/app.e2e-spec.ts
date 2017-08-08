import { MyBlogPage } from './app.po';

describe('my-blog App', () => {
  let page: MyBlogPage;

  beforeEach(() => {
    page = new MyBlogPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
