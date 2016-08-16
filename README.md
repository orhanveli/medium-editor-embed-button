# medium-editor-embed-button
You can embed any oEmbed supported media to your document by just

* paste url
* highlight it
* click **E** button, that's it!

## how to use
Reference script to page, create an MediumEditor instance with extension config.

        var editor = new MediumEditor('.editable', {
            buttonLabels: 'fontawesome',
            extensions: {
                table: new EmbedButtonExtension()
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