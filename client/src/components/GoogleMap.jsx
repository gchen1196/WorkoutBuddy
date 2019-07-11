import React, { useEffect, useRef } from 'react';
import key from '../../../API_KEY.js';
import { isEqual, omit, functions } from 'lodash';

const GoogleMap = ({options, onMount, className}) => {
  const props = { ref: useRef(), className };
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options)
    onMount && onMount(map)
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`)
      script.type = `text/javascript`
      script.src =
        `https://maps.google.com/maps/api/js?key=` + key;
      const headScript = document.getElementsByTagName(`script`)[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  })
  return (
    <div {...props} style={{height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }} />
  )
}

const shouldUpdate = (prevProps, nextProps) => {
  const [prevFuncs, nextFuncs] = [functions(prevProps), functions(nextProps)]
  return (
    isEqual(omit(prevProps, prevFuncs), omit(nextProps, nextFuncs)) &&
    prevFuncs.every(fn => prevProps[fn].toString() === nextProps[fn].toString())
  )
}

export default React.memo(GoogleMap, shouldUpdate);
