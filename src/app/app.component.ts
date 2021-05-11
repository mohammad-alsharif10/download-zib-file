import {Component, OnInit} from '@angular/core';
import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'download-zib-file';
  zipFile: JSZip = new JSZip();

  ngOnInit(): void {
    this.zipFile.file('Hello.txt', 'Hello World\n');
    this.zipFile.file('smile.txt', 'hello again');
    this.zipFile.generateAsync({type: 'blob'})
      .then((content) => {
        // see FileSaver.js
        saveAs(content, 'example.zip');
      });
  }
}
