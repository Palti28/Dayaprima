
  foreach (new DirectoryIterator('../img') as $fileInfo) {
    if($fileInfo->isDot()) continue;
    echo $fileInfo->getFilename() . "<br>\n";
}