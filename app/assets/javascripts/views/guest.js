window.Guest = {
  initialize: function() {
    $('.guest-btn').on("click", this.guestLogin.bind(this));
  },

  guestLogin: function(event) {
    event.preventDefault;
    var that = this;
    // $(".existing-users-btn").click(function(e) {
    // });


    $email = $('#user_email');
    $password = $('#user_password');
    $loginButton = $('.login-btn');

    this.fillin($email, "ed@gmail.com", function() {
      that.fillin($password, "ededed", function() {
        $loginButton.click();
      });
    });
  },

  fillin: function($el, word, callback) {
    var typing = setInterval(function() {
      $el.val( $el.val() + word.slice(0,1) );
      word = word.substr(1);

      if (!word) {
        clearInterval(typing);
        callback();
      }
    }, 40);
  }
};
