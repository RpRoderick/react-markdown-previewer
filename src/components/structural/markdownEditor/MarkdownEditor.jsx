import React from 'react';
import styles from 'components/structural/markdownEditor/MarkdownEditor.module.scss';
import ButtonArea from 'components/structural/buttonArea/ButtonArea';
import PreviewArea from 'components/structural/previewArea/PreviewArea';
import TextArea from 'components/structural/textArea/TextArea';

const placeholder = 
`# <u>React Markdown Previewer</u>

# **<span style="color:blue">Basics:</span>**

**Bold text**

*Italicized text*

**_Bold and Italicized text_**

> Block Quote

<u>underlined (sort of - it's actually just html)</u>

~~crossed out~~

Single line code: \`<div></div>\`

Multi-line code:
\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
1. Numbered Lists
2. are easy
3. to make

- So are
- unordered
- lists

# H1 - Heading #1
## H2 - Heading #2
### H3 - Heading #3

[Links are easy too](https://github.com/RpRoderick) Or html to open in a new tab <a href="https://github.com/RpRoderick" target="_blank">Links are easy too</a>

For more Markdown tips, check out this <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">Cheat Sheet</a>
`
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.updateMarkdown = this.updateMarkdown.bind(this);
    this.clearMarkdown = this.clearMarkdown.bind(this);
    this.resetMarkdown = this.resetMarkdown.bind(this);
    this.copyButton = this.copyButton.bind(this);
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
    this.state = {
      markdown: placeholder,
      message: "Welcome!"
    };
  }

  copyToClipBoard (id) {
    document.getElementById(id).select();
    document.execCommand("copy");
  }

  copyButton() {
    const currentMarkdownState = this.state.markdown;
    const currentMessageState = this.state.message;
    const copied = "COPIED!";
    const alreadyCopied = "You're already copied!"
    const notCopied = "Nothing to Copy!"
    const emptyField = "Nothing to Clear!";
    const cleared = "CLEARED!";
    if (currentMarkdownState.length > 0 && currentMarkdownState !== copied && currentMarkdownState !== notCopied) {
      this.copyToClipBoard("textarea");
      this.setState({
        message: copied
      })
    } else if (currentMessageState == copied) {
      this.setState({
        message: alreadyCopied
      })
    } else if (currentMessageState.length <= 0 || currentMessageState == notCopied || currentMessageState == cleared) {
      this.setState({
        message: notCopied
      })   
    } else if (currentMessageState == emptyField) {
      this.setState({
        message: notCopied
      })   
    }
  }
  
  updateMarkdown(markdown) {
    this.setState({ 
      markdown,
      message: "You are typing..."
    });
  }
  
  clearMarkdown() {
    const currentMarkdownState = this.state.markdown;
    const emptyField = "Nothing to clear!";
    const cleared = "CLEARED!";
    if (currentMarkdownState.length == 0) {
      this.setState({
        message: emptyField
      })
    } else if (currentMarkdownState == placeholder || currentMarkdownState.length > 0) {
      this.setState({
        message: cleared
      })
    }
    return this.setState({ 
      markdown: "" 
    });
  }
  
  resetMarkdown() {
    const resetStateMessage = "State is Reset";
    this.setState({ 
      markdown: placeholder,
      message: resetStateMessage 
    });
  }
  
    render() {
    const markdown = this.state.markdown;
    const message = this.state.message;
    return (
      <div className={styles.markdown_editor_container}>
        <div className={styles.markdown_editor_button_area}>
          <ButtonArea 
            clearMarkdown={this.clearMarkdown}
            resetMarkdown={this.resetMarkdown}
            message={message}
            copyButton={this.copyButton} />
        </div>
        <div className={styles.markdown_editor_field_container}>
          <div className={styles.markdown_editor_text_area}>
            <TextArea 
              updateMarkdown={this.updateMarkdown}
              markdown={markdown} />
          </div>
          <div className={styles.markdown_editor_preview_area}>
            <PreviewArea 
              markdown={markdown} />
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownEditor;
