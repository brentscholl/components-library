## Cloud Creations Components Library
#### * Be sure to remove library from client projects before launch.*
You can pull this library into your project by running 

`git clone git@github.com:cloud-creations/components_library.git` 

in your theme's `/resources/` directory

## Adding to this Library
- Create a folder for your component. 
    - The name of this root folder is the name of your component. 
    - Please use `snake_case` when naming your components and files.
- Use your component name for each file needed for your component. ie.
```
    ├── component_name/                # → Component Root
    │   ├── component_name.php         # → Component's PHP Logic (functions.php logic)
    │   ├── component_name.blade.php   # → Component's Markup
    │   ├── component_name.js          # → Component's Javascript
    │   ├── component_name.less        # → Component's CSS/LESS/SCSS
    │   └── readme                     # → About the Component / How to use
```
- It's helpful to include a `readme` that explains what the component is, and how to use it.
- If a component requires the developer to input their own custom data, use `[ALL_CAPS_SNAKE_CASE_IN_SQUARE_BRACKETS]` ie. 

```
$api_key = [YOUR_API_KEY]

<a href="[YOUR_URL]"></a>

.class { height: [YOUR_HEIGHT] }
```

There is a `snippets.js` file that includes a bunch of javascript snippets that do not relate to a particular component.

