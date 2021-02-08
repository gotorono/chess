export const newX = (x, pieceRef, playing) => {
  if (playing === "black")
    return Math.floor(
      Math.abs(
        (x - pieceRef.current.parentNode.offsetParent.offsetLeft - pieceRef.current.parentNode.parentNode.parentNode.parentNode.clientWidth - pieceRef.current.offsetParent.offsetParent.offsetParent.offsetLeft) / (pieceRef.current.parentNode.parentNode.parentNode.parentNode.clientWidth / 8)
      )
    );
  else
    return Math.floor(
      (x - pieceRef.current.parentNode.offsetParent.offsetLeft - pieceRef.current.offsetParent.offsetParent.offsetParent.offsetLeft) / (pieceRef.current.parentNode.parentNode.parentNode.parentNode.clientWidth / 8)
    );
};

export const newY = (y, pieceRef, playing) => {
  if (playing === "black")
    return Math.floor(
      Math.abs(
        y - (pieceRef.current.parentNode.parentNode.parentNode.parentNode.clientWidth - window.pageYOffset + pieceRef.current.offsetParent.offsetParent.offsetTop + pieceRef.current.offsetParent.offsetParent.offsetParent.offsetTop)
      ) / (pieceRef.current.parentNode.parentNode.parentNode.parentNode.clientWidth / 8)
    );
  else
    return Math.floor(
      (y + window.pageYOffset - pieceRef.current.parentNode.offsetParent.offsetTop - pieceRef.current.offsetParent.offsetParent.offsetParent.offsetTop) / (pieceRef.current.parentNode.parentNode.parentNode.parentNode.clientWidth / 8)
    );
};

export const translateX = (x, pieceRef, playing) => {
  if (playing === "black")
    return -(
      x -
      pieceRef.current.offsetLeft -
      pieceRef.current.offsetParent.offsetParent.offsetLeft -
      pieceRef.current.offsetParent.offsetParent.offsetParent.offsetLeft -
      (pieceRef.current.parentNode.parentNode.parentNode.parentNode.clientWidth - pieceRef.current.offsetParent.offsetLeft) +
      pieceRef.current.clientWidth / 2
    );
  else
    return (
      x -
      pieceRef.current.offsetLeft -
      pieceRef.current.offsetParent.offsetLeft -
      pieceRef.current.offsetParent.offsetParent.offsetLeft -
      pieceRef.current.offsetParent.offsetParent.offsetParent.offsetLeft -
      pieceRef.current.clientWidth / 2
    );
};

export const translateY = (y, pieceRef, playing) => {
  if (playing === "black")
    return -(
      y -
      pieceRef.current.offsetTop +
      window.pageYOffset -
      pieceRef.current.offsetParent.offsetParent.offsetTop -
      pieceRef.current.offsetParent.offsetParent.offsetParent.offsetTop -
      (pieceRef.current.parentNode.parentNode.parentNode.parentNode.clientWidth - pieceRef.current.offsetParent.offsetTop) +
      pieceRef.current.clientHeight / 2
    );
  else
    return (
      y -
      pieceRef.current.offsetTop +
      window.pageYOffset -
      pieceRef.current.offsetParent.offsetTop -
      pieceRef.current.offsetParent.offsetParent.offsetTop -
      pieceRef.current.offsetParent.offsetParent.offsetParent.offsetTop -
      pieceRef.current.clientHeight / 2
    );
};
