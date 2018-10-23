window.onload = (function() {
    
    var timer = setTimeout(Delete, 750);
    var item = 0;
    function Delete() {
      if (item > 65) {
        item = 0;
        clearTimeout(timer);
        return timer = setTimeout(Delete, 15000);
      }
      document.querySelector('a[action-type="fl_menu"]').click();
      document.querySelector('a[action-type="feed_list_delete"]').click();
      document.querySelector('a[action-type="ok"]').click();
      ++item;
      console.log(`deleted${item}`);
      timer = setTimeout(Delete, 750);
    }
  })();
