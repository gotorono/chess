export const newX = (x, pieceRef, playing) => {
  if (playing === "black")
    return Math.floor(
      Math.abs(
        (x - pieceRef.current.parentNode.offsetParent.offsetLeft - 800 - pieceRef.current.offsetParent.offsetParent.offsetParent.offsetLeft) / 100
      )
    );
  else
    return Math.floor(
      (x - pieceRef.current.parentNode.offsetParent.offsetLeft - pieceRef.current.offsetParent.offsetParent.offsetParent.offsetLeft) / 100
    );
};

export const newY = (y, pieceRef, playing) => {
  if (playing === "black")
    return Math.floor(
      Math.abs(
        y - (800 + pieceRef.current.offsetParent.offsetParent.offsetTop + pieceRef.current.offsetParent.offsetParent.offsetParent.offsetTop)
      ) / 100
    );
  else
    return Math.floor(
      (y - pieceRef.current.parentNode.offsetParent.offsetTop - pieceRef.current.offsetParent.offsetParent.offsetParent.offsetTop) / 100
    );
};

export const translateX = (x, pieceRef, playing) => {
  if (playing === "black")
    return -(
      x -
      pieceRef.current.offsetLeft -
      pieceRef.current.offsetParent.offsetParent.offsetLeft -
      pieceRef.current.offsetParent.offsetParent.offsetParent.offsetLeft -
      (800 - pieceRef.current.offsetParent.offsetLeft) +
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
      pieceRef.current.offsetTop -
      pieceRef.current.offsetParent.offsetParent.offsetTop -
      pieceRef.current.offsetParent.offsetParent.offsetParent.offsetTop -
      (800 - pieceRef.current.offsetParent.offsetTop) +
      pieceRef.current.clientHeight / 2
    );
  else
    return (
      y -
      pieceRef.current.offsetTop -
      pieceRef.current.offsetParent.offsetTop -
      pieceRef.current.offsetParent.offsetParent.offsetTop -
      pieceRef.current.offsetParent.offsetParent.offsetParent.offsetTop -
      pieceRef.current.clientHeight / 2
    );
};
