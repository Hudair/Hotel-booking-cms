(()=>{"use strict";var e=e||{};e.init=function(){var e=$(document).find("input[name=payment_method]").first();e.length&&(e.trigger("click").trigger("change"),e.closest(".list-group-item").find(".payment_collapse_wrap").addClass("show")),$(".stripe-card-wrapper").length>0&&new Card({form:".payment-checkout-form",container:".stripe-card-wrapper",formSelectors:{numberInput:"input#stripe-number",expiryInput:"input#stripe-exp",cvcInput:"input#stripe-cvc",nameInput:"input#stripe-name"}}),$(document).on("change",".js_payment_method",(function(){$(".payment_collapse_wrap").removeClass("collapse").removeClass("show").removeClass("active")})),$(document).on("click",".payment-checkout-btn",(function(){var e=$(this),t=e.closest("form");e.attr("disabled","disabled");var r=e.html();e.html('<i class="fa fa-gear fa-spin"></i> '+e.data("processing-text")),"stripe"===$("input[name=payment_method]:checked").val()?(Stripe.setPublishableKey($("#payment-stripe-key").data("value")),Stripe.card.createToken(t,(function(a,n){n.error?("undefined"!=typeof Botble?Botble.showError(n.error.message,e.data("error-header")):alert(n.error.message),e.removeAttr("disabled"),e.html(r)):(t.append($('<input type="hidden" name="stripeToken">').val(n.id)),t.submit())}))):t.submit()}))},$(document).ready((function(){e.init()}))})();
