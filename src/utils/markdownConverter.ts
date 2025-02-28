/**
 * Converts HTML content from the rich text editor to Markdown
 * @param html HTML string from the rich text editor
 * @returns Markdown string
 */
export const convertToMarkdown = (html: string): string => {
  if (!html) return '';

  // Create a temporary DOM element to parse the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // Process the DOM and convert to Markdown
  return processNode(tempDiv);
};

/**
 * Recursively processes DOM nodes and converts them to Markdown
 * @param node DOM node to process
 * @returns Markdown string
 */
const processNode = (node: Node): string => {
  let markdown = '';

  // Process each child node
  node.childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      markdown += child.textContent;
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      const element = child as HTMLElement;

      // Process different HTML elements
      switch (element.tagName.toLowerCase()) {
        case 'p':
          // Add extra spacing for paragraphs
          const paragraphContent = processNode(element).trim();
          markdown += paragraphContent + '\n\n';
          break;
        case 'h1':
          // Add extra spacing for headings
          const h1Content = processNode(element).trim();
          markdown += '# ' + h1Content + '\n\n';
          break;
        case 'h2':
          // Add extra spacing for headings
          const h2Content = processNode(element).trim();
          markdown += '## ' + h2Content + '\n\n';
          break;
        case 'h3':
          // Add extra spacing for headings
          const h3Content = processNode(element).trim();
          markdown += '### ' + h3Content + '\n\n';
          break;
        case 'strong':
        case 'b':
          // Check if this element is inside a heading
          let parent = element.parentElement;
          let isInsideHeading = false;

          while (parent) {
            if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(parent.tagName.toLowerCase())) {
              isInsideHeading = true;
              break;
            }
            parent = parent.parentElement;
          }

          // Only add bold markers if not inside a heading
          if (!isInsideHeading) {
            markdown += '**' + processNode(element) + '**';
          } else {
            markdown += processNode(element);
          }
          break;
        case 'em':
        case 'i':
          markdown += '*' + processNode(element) + '*';
          break;
        case 'u':
          markdown += '_' + processNode(element) + '_';
          break;
        case 'code':
          markdown += '`' + processNode(element) + '`';
          break;
        case 'pre':
          markdown += '```\n' + processNode(element) + '\n```\n\n';
          break;
        case 'blockquote':
          // Split by newlines and add '> ' to each line
          const blockquoteContent = processNode(element).trim();
          markdown += blockquoteContent.split('\n')
            .map(line => '> ' + line)
            .join('\n') + '\n\n';
          break;
        case 'a':
          const href = element.getAttribute('href') || '';
          markdown += '[' + processNode(element) + '](' + href + ')';
          break;
        case 'ul':
          // Add extra spacing for lists
          const ulContent = processListItems(element, '*');
          markdown += ulContent + '\n\n';
          break;
        case 'ol':
          // Add extra spacing for lists
          const olContent = processListItems(element, '1.');
          markdown += olContent + '\n\n';
          break;
        case 'li':
          // List items are handled by processListItems
          markdown += processNode(element);
          break;
        case 'br':
          markdown += '\n';
          break;
        case 'div':
          // For div elements, just process their children
          const divContent = processNode(element);
          markdown += divContent;
          if (element.nextSibling && divContent.trim()) markdown += '\n\n';
          break;
        case 'span':
          // For span elements, just process their children
          markdown += processNode(element);
          break;
        default:
          // For unknown elements, just process their children
          markdown += processNode(element);
      }
    }
  });

  return markdown;
};

/**
 * Processes list items and converts them to Markdown
 * @param listElement UL or OL element
 * @param marker Marker to use for list items ('*' for UL, '1.' for OL)
 * @returns Markdown string
 */
const processListItems = (listElement: HTMLElement, marker: string): string => {
  let markdown = '';
  let counter = 1;

  listElement.childNodes.forEach(child => {
    if (child.nodeType === Node.ELEMENT_NODE && (child as HTMLElement).tagName.toLowerCase() === 'li') {
      const itemContent = processNode(child).trim();

      if (marker === '1.') {
        // For ordered lists, use incrementing numbers
        markdown += `${counter}. ${itemContent}\n`;
        counter++;
      } else {
        // For unordered lists, use the marker
        markdown += `${marker} ${itemContent}\n`;
      }
    }
  });

  return markdown;
};

export default convertToMarkdown; 