import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-exam-panel',
  templateUrl: './exam-panel.component.html',
  styleUrls: ['./exam-panel.component.css']
})
export class ExamPanelComponent implements OnInit {

  public currentQuestion: number = 0;
  public points: number=0;
  counter=60;
  
  constructor() { }

  ngOnInit(): void {
  }

  URLS: any = [
    
    'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/33130/typewriter-keys-mechanically-letters.jpg?auto=compress&cs=tinysrgb&h=350',
    'https://images.unsplash.com/photo-1537433156662-a467cd381897?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d6214ffc5971f865245933e9de13be6&auto=format&fit=crop&w=500&q=60', 
    'https://images.unsplash.com/photo-1512672378591-74fbb56b1d28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=111881731843c98860fd6ede341337d7&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1486495939893-f384c2860f55?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf36a4694839666ab094bcdd0bb88651&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1514913274516-4aa04f176f8c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6940b0c53d64fc564bed31bb6aa8d9b&auto=format&fit=crop&w=1760&q=80',
    'https://images.unsplash.com/photo-1523286877159-d9636545890c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f44497f72d77b9e8e27e87521e025edc&auto=format&fit=crop&w=1351&q=80','https://images.unsplash.com/photo-1459886757952-87e191b82aeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c977d9f0c074c220a31f1e89449c3aa&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1519423961530-9131478718db?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6132d79c5060ba00caa99cf39457da6&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1482510356941-d087154c2931?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd6c067c548407960ec92f1e820775ee&auto=format&fit=crop&w=1355&q=80',
    'https://images.unsplash.com/photo-1520507215037-061ed0f37178?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b0ee4f4dcd684859da448cc26c707a2&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1522447984233-657d56c465d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2efa4e73b38094995897590487ba5b4&auto=format&fit=crop&w=1350&q=80'
    ];
    

  
  nextQuestion(){
    this.currentQuestion++;
  }

  previousQuestion(){
    this.currentQuestion--;
  }


}
