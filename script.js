const elements = document.querySelectorAll(`[data-set]`);
const SideContent = document.querySelector('.sidecontent');
const BTN_plus = document.getElementsByTagName("button")
const Attirubutes = document.getElementsByTagName("a") 


function SwitchTab() {
  Array.from(elements).map((ele, index) => {
    if (ele.innerHTML === 'About') {
      SideContent.innerHTML = `A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.`;
    } else if (ele.innerHTML === 'Linked') {
      SideContent.innerHTML = `A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose`;
    } else if (ele.innerHTML === 'Share') {
      SideContent.innerHTML = `ParagraphParagraphs are the group of sentences combined together, about a certain topic. It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc. We can say that a well-structured paragraph is the essence of good writing. The purposes of the paragraph are to give information, to explain something, to tell a story, and to convince someone that our idea is right.`;
    }
  });
}



