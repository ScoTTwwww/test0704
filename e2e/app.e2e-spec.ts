import { Test0704Page } from './app.po';

describe('test0704 App', () => {
  let page: Test0704Page;

  beforeEach(() => {
    page = new Test0704Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
