

import React, {useState, useEffect} from 'react'

const userScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(()=> {
        const updateScrollCompletion = ()=> {
            const currentProgess = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(Number(currentProgess/scrollHeight).toFixed(2) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollCompletion);

        return ()=> window.removeEventListener('scroll', updateScrollCompletion)
    }, []);

  return completion
}

export default userScrollProgress