import React from 'react';
import styles from 'components/structural/markdownEditor/MarkdownEditor.module.scss';
import ButtonArea from 'components/structural/buttonArea/ButtonArea';
import PreviewArea from 'components/structural/previewArea/PreviewArea';
import TextArea from 'components/structural/textArea/TextArea';

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateMarkdown = this.updateMarkdown.bind(this);
    this.clearMarkdown = this.clearMarkdown.bind(this);
    this.resetMarkdown = this.resetMarkdown.bind(this);
    this.state = {
      markdown: placeholder
    };
  }
  
  updateMarkdown(markdown) {
    this.setState({ 
      markdown 
    });
  }
  
  clearMarkdown() {
    this.setState({ 
      markdown: "" 
    });
  }
  
    resetMarkdown() {
    this.setState({ 
      markdown: placeholder 
    });
  }
  
    render() {
    const markdown = this.state.markdown;
    return (
      <>
        <div className={styles.markdown_editor_button_area}>
          <ButtonArea 
            clearMarkdown={this.clearMarkdown}
            resetMarkdown={this.resetMarkdown} />
        </div>
        <div className={styles.markdown_editor_text_area}>
          <TextArea 
            updateMarkdown={this.updateMarkdown}
            markdown={markdown} />
        </div>
        <div className={styles.markdown_editor_preview_area}>
          <PreviewArea 
            markdown={markdown}  
          />
        </div>
      </>
    );
  }
}

export default MarkdownEditor;
