Be sure to add the `#panel` element around your main content. Usually add to `header.blade.php` and `footer.blade.php`
```
<div id="panel"><!-- Needed for mobile menu. This is what slides when you click mobile menu button -->
...
</div> <!-- #panel ends -->
```

Install `slideout.js` by running `yarn install slideout`. Then add 
```
import Slideout from 'slideout';
```
To the top of your `/resources/scripts/app.js`

For fixed elements outside of the `#panel` ie. a header, add the class `class="fixed-to-panel"` This will move the fixed element with the rest of the panel