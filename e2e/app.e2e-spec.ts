import { LoanFrontPage } from './app.po';

describe('loan-front App', () => {
  let page: LoanFrontPage;

  beforeEach(() => {
    page = new LoanFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
