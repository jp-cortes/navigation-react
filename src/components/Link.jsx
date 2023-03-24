import React from 'react';

export function Link({ content, toPage }) {

const navigateToPage = () => {
    window.history.pushState(null, '', `${toPage}`);
    window.location.replace(`${toPage}`);
}

  return (
    <button
    onClick={() => navigateToPage()}
    >
        {content}
        </button>
  )
}
