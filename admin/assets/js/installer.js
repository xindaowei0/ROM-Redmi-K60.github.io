jQuery(function(e){e(document).on("click",".jw-pagefactory-btn-install, .jw-pagefactory-btn-update",function(s){s.preventDefault();var a=e(this),t=a.closest("li").data("integration"),i="";if("update"==a.closest("li").attr("class"))i="update";e.ajax({type:"POST",url:pagefactory_base+"index.php?option=com_jwpagefactory&task=integrations.install&integration="+t+"&installtype="+i,beforeSend:function(){a.html('<i class="fa fa-spinner fa-spin"></i> Installing...')},success:function(s){a.find("i").removeAttr("class");var t=e.parseJSON(s);t.success?(a.html('<i class="fa fa-check"></i> Installed'),setTimeout(function(){"update"==a.closest("li").attr("class")?a.closest("li").removeAttr("class").addClass("enabled"):a.closest("li").removeAttr("class").addClass("installed")},500)):alert(t.message)}})}),e(document).on("click",".jw-pagefactory-btn-enable",function(s){s.preventDefault();var a=e(this),t=a.closest("li").data("integration");e.ajax({type:"POST",url:pagefactory_base+"index.php?option=com_jwpagefactory&task=integrations.enable&integration="+t,beforeSend:function(){a.find("i").addClass("fa fa-spinner fa-spin")},success:function(s){a.find("i").removeAttr("class");var t=e.parseJSON(s);t.success?a.closest("li").removeAttr("class").addClass("enabled"):alert(t.message)}})}),e(document).on("click",".jw-pagefactory-btn-disable",function(s){s.preventDefault();var a=e(this),t=a.closest("li").data("integration");e.ajax({type:"POST",url:pagefactory_base+"index.php?option=com_jwpagefactory&task=integrations.disable&integration="+t,beforeSend:function(){a.find("i").addClass("fa fa-spinner fa-spin")},success:function(s){a.find("i").removeAttr("class");var t=e.parseJSON(s);t.success?a.closest("li").removeAttr("class").addClass("installed"):alert(t.message)}})}),e(document).on("click",".jw-pagefactory-btn-uninstall",function(s){s.preventDefault();var a=e(this),t=a.closest("li").data("integration");e.ajax({type:"POST",url:pagefactory_base+"index.php?option=com_jwpagefactory&task=integrations.uninstall&integration="+t,beforeSend:function(){a.html('<i class="fa fa-spinner fa-spin"></i> Uninstalling...')},success:function(s){a.find("i").remove();var t=e.parseJSON(s);t.success?(a.html('<i class="fa fa-check"></i> Uninstalled'),setTimeout(function(){a.html("Uninstall"),a.closest("li").removeAttr("class").addClass("available")},500)):alert(t.message)}})})});