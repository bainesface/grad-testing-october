import React, { useState, useEffect } from 'react';
import marked from 'marked';
import axios from 'axios';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-bash';

export const MarkdownLoader = ({ markdownUrl }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    axios.get(markdownUrl).then(({ data }) => setMarkdown(data));
  }, [markdownUrl]);

  useEffect(() => {
    Prism.highlightAll();
    marked.setOptions({
      highlight: (code, lang) =>
        lang && Prism.highlight(code, Prism.languages[lang], lang),
    });
  }, [markdown]);

  if (!markdown) {
    return null;
  }

  return (
    <div className="container">
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};
