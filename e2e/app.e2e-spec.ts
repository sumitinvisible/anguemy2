import { Anguemy2Page } from './app.po';

describe('anguemy2 App', function() {
  let page: Anguemy2Page;

  beforeEach(() => {
    page = new Anguemy2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
