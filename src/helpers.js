import DOMPurify from "dompurify";
import { convertToHTML } from "draft-convert";
import { convertFromRaw } from "draft-js";

// code found at https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/
export const formatPhone = (num) => {
    let cleaned = ('' + num).replace(/\D/g, '');

    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
}

// Unslugify a string to be used as headings
export const unslugify = (string) => {
  return string.replaceAll('_', ' ')
}

// Set user in local storage to a user profile
export const setLocalProfile = (profile) => {
  localStorage.setItem("user", JSON.stringify(profile));
}

// Gets user profile for comparison
export const getLocalProfile = async () => {
  const profile =  localStorage.getItem('user')
  return JSON.parse(profile)
} 

// Converts to html then sanitizes Markup before it is injected into html
export const convertContentToHtml = (raw) => {
  const convertedContent = convertToHTML(convertFromRaw(raw));
  return {__html: DOMPurify.sanitize(convertedContent)}
}

