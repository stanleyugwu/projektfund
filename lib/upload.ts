import fs, { writeFile } from 'fs'
import { join } from 'path'

export async function upload(file: any, path: string, isPublic: boolean = true){
    if(!file) return null
    const filePath = join(isPublic ? 'public' : 'storage', path)
    const ext = file.name.split('.').pop()
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const storagePath = filePath+'.'+ext.toLowerCase();
    const publicPath = path + '.' + ext.toLowerCase();
    
    writeFile(filePath+'.'+ext.toLowerCase(), buffer, (err) => {
        console.log(err)
    })

    return isPublic ? publicPath : storagePath;
}