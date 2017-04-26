# medium-editor-embed-button
You can embed any oEmbed supported media to your document.

Check this [demo](https://orhanveli.github.io/)

* paste url
* highlight it
* click **E** button, that's it!

## installation
You can install via bower

    $ bower install medium-editor-embed-button

... or npm

    $ npm install medium-editor-embed-button

## how to use
Reference script and stylesheet to page

    <link rel="stylesheet" href="/path/to/medium-editor-embed-button.min.css" type="text/css" media="screen" charset="utf-8">
    <script type="text/javascript" src="/path/to/medium-editor-embed-button.min.js"></script>

and create an MediumEditor instance with extension config.

        var editor = new MediumEditor('.editable', {
            buttonLabels: 'fontawesome',
            extensions: {
                embedButton: new EmbedButtonExtension()
            },
            toolbar: {
                buttons: [
                    'h2',
                    'bold',
                    'italic',
                    'unorderedlist',
                    'orderedlist',
                    'embedButton'
                ]
            }
    });

and try it :)

Don't hesitate to contribute.

cheers!

## Changelog

### Apr 26, 2017 (v1.3.0)
- oembed service (embedly, iframely etc) support improvements
- added twitter embed customization options for embed as video and don't include conversation
- various bugfixes
- AMD and CommonJS module compatibility
- npm registration made according to requests 

### Aug 22, 2016
- bower register

### Aug 18, 2016
- iframely embed script support added
- added demo to readme
- added some missing info to readme