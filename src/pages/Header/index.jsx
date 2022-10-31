import React, {useState} from "react"
import './Header.css'
import curriculum from './assets/curriculum.pdf'
import {Flex, IconButton} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'



const Header = ()=>{
    
    const[displayChange, useDisplayChange]= useState('none')
    

    return(
        <>
        <header>

        <a id="miCv" href="#presentacion">Mi CV</a>   

        <Flex display={['none', 'none', 'flex', 'flex']} gap='2rem'>
            <nav>
                <a href='#trabajos'>Trabajos</a>
                <a href='#educacion'>Educacion</a>
                <a href='#habilidades'>Habilidades</a>
                <a href='#formulario'>Contacto</a>
            </nav>
            
            <button id="descargar"><a href={curriculum} download id="descargarpdf">DESCARGAR</a></button>
        </Flex>
        <IconButton 
            variant='outline'
            aria-label="Open Menu"
            size='sm'
            mr={2}
            icon={<HamburgerIcon />}
            display={['flex', 'flex', 'none', 'none']}
            onClick={()=>useDisplayChange('flex')}
        />
        
        <Flex 
            w='100vw' 
            bgGradient='linear-gradient(90deg, #8b4ef0 0%, #31a7f7 100%)' 
            opacity='0.95'
            zIndex={20} 
            h='45vh' 
            pos='fixed' 
            top='0' 
            left='0'
            overflowY='auto'
            flexDir='column'
            display={displayChange}
        >
            <Flex justify='flex-end'>
                <IconButton 
                    variant='outline'
                    size='sm'
                    mt={3}
                    mr={9}
                    icon={<CloseIcon />}
                    onClick={()=>useDisplayChange('none')}
                />
            </Flex>
            <Flex flexDir='column' align='center' gap='0.5rem'>
                
                <a href='#trabajos'>Trabajos</a>
                <a href='#educacion'>Educacion</a>
                <a href='#habilidades'>Habilidades</a>
                <a href='#formulario'>Contacto</a>
                
                <button id="descargar"><a href={curriculum} download id="descargarpdf">DESCARGAR</a></button>
            </Flex>
            
        </Flex>

        </header>
    </>
    )
}

export {Header}