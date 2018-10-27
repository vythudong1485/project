// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// App components
import { AppComponent } from './app.component';

// Header component
import { HeaderComponent } from './components/header/header.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';

// Slide component
import { SlideComponent } from './components/slide//slide.component';

// Footer component
import { FooterComponent } from './components/footer/footer.component';

// Home component
import { HomeComponent } from './components/home/home.component';

// Students page component
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/student/course/course.component';
import { ScheduleComponent } from './components/student/schedule/schedule.component';
import { ResultComponent } from './components/student/result/result.component';
import { RegisterComponent } from './components/student/register/register.component';

// Introduction component
import { IntroductionComponent } from './components/introduction/introduction.component';
import { IntroductionOneComponent } from './components/introduction/components/introduction-one/introduction-one.component';
import { IntroductionTwoComponent } from './components/introduction/components/introduction-two/introduction-two.component';
import { IntroductionThreeComponent } from './components/introduction/components/introduction-three/introduction-three.component';
import { IntroductionFourComponent } from './components/introduction/components/introduction-four/introduction-four.component';

// News component
import { NewspageComponent } from './components/newspage/newspage.component';
import { NewsComponent } from './components/news/news/news.component';

// Courses page component
import { CoursesComponent } from './components/courses/courses.component';
import { JlptChildrenN52Component } from './components/courses/jlpt/jlpt-children-n52/jlpt-children-n52.component';
import { JlptChildrenN41Component } from './components/courses/jlpt/jlpt-children-n41/jlpt-children-n41.component';
import { JlptChildrenN42Component } from './components/courses/jlpt/jlpt-children-n42/jlpt-children-n42.component';
import { JlptChildrenN31Component } from './components/courses/jlpt/jlpt-children-n31/jlpt-children-n31.component';
import { JlptChildrenN32Component } from './components/courses/jlpt/jlpt-children-n32/jlpt-children-n32.component';
import { SkillsComponent } from './components/courses/skills/skills.component';
import { JlptComponent } from './components/courses/jlpt/jlpt.component';
import { ChildrenComponent } from './components/courses/children/children.component';
import { JlptChildrenComponent} from './components/courses/jlpt/jlpt-children/jlpt-children.component';

// Breadcrum component
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

// Events component
import { EventComponent } from './components/news/event/event.component';

// Career - Oppotunities component
import { CareerOpportunitiesComponent } from './components/career-opportunities/career-opportunities.component';
import { JapanCenterComponent } from './components/career-opportunities/japan-center/japan-center.component';
import { EnterpriseComponent } from './components/career-opportunities/enterprise/enterprise.component';

// Opening schedule component
import { OpeningScheduleComponent } from './components/opening-schedule/opening-schedule.component';

// Why choose Quy Nhon University component
import { WhyChooseJpcenterComponent } from './components/why-choose-jpcenter/why-choose-jpcenter.component';

// Service - Partner component
import { ServicePartnerComponent } from './components/service-partner/service-partner.component';
import { StudyComponent } from './components/service-partner/study/study.component';
import { LaborComponent } from './components/service-partner/labor/labor.component';
import { ProjectsComponent } from './components/service-partner/projects/projects.component';
import { PartnerComponent } from './components/service-partner/partner/partner.component';

// Loading component
import { LoadingComponent } from './components/loading/loading.component';

// HTTP services
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Routes
import { RouterModule, Routes } from '@angular/router';

// Custom Services
import { NewService } from './components/news/service.service';

// Routes object
const routes: Routes = [
  { path: 'student',
        children:
        [
          {
            path:'',
            redirectTo:'student/',
            pathMatch: 'full'
          },
          {
            path: 'course',
            component: CourseComponent
          },
          {
            path: 'result',
            component: ResultComponent
          },
          {
            path: 'schedule',
            component: ScheduleComponent
          },
          {
            path: 'register',
            component: RegisterComponent
          },
        ]
  },
  
  {
      path: 'trang-chu',
      component: HomeComponent,
   },    
   {
     path:'',
     component: HomeComponent,
   },    

  {
    path: 'gioi-thieu',
    component: IntroductionComponent,
    children: [
      {
        path: 'trung-tam-nhat-ban',
        component: IntroductionOneComponent
      },
      {
        path: 'truong-dai-hoc-quy-nhon',
         component: IntroductionTwoComponent
      },
      {
        path: 'quy-nhon-binh-dinh',
         component: IntroductionThreeComponent
      },
      {
        path: 'nhan-su-trung-tam',
        component: IntroductionFourComponent
      }
    ]
  },
  {
      path: 'dich-vu-doi-tac',
      component: ServicePartnerComponent,
      children: [
        {
          path: 'tu-van-du-hoc-va-viec-lam',
          component: StudyComponent
        },
        {
          path: 'xuat-khau-lao-dong',
          component: LaborComponent
        },
        {
          path: 'du-an',
          component: ProjectsComponent
        },
        {
          path: 'doi-tac',
          component: PartnerComponent
        }
      ]
  },
  {
    path: 'dich-vu-doi-tac/tu-van-du-hoc-va-viec-lam',
    component: StudyComponent,       
  },
  {
    path: 'dich-vu-doi-tac/xuat-khau-lao-dong',
    component: LaborComponent,       
  },
  {
    path: 'dich-vu-doi-tac/du-an',
    component: ProjectsComponent,       
  },
  {
    path: 'dich-vu-doi-tac/doi-tac',
    component: PartnerComponent,       
  },
  {
    path: 'khoa-hoc',
    component: CoursesComponent,  
  },
 {
    path: 'khoa-hoc/cac-khoa-tieng-nhat-JLPT',
    component: JlptComponent,       
  },
  {
    path: 'khoa-hoc/tieng-nhat-cho-thieu-nhi',
    component: ChildrenComponent 
  },
  {
    path: 'khoa-hoc/cac-khoa-ky-nang-mem',
    component: SkillsComponent
  },
  {
    path : 'khoa-hoc/cac-khoa-tieng-nhat-JLPT/khoa-hoc-tieng-nhat-n51',
    component: JlptChildrenComponent
  },
  {
    path : 'khoa-hoc/cac-khoa-tieng-nhat-JLPT/khoa-hoc-tieng-nhat-n52',
    component: JlptChildrenN52Component
  },
  {
    path : 'khoa-hoc/cac-khoa-tieng-nhat-JLPT/khoa-hoc-tieng-nhat-n41',
    component: JlptChildrenN41Component
  },
  {
    path : 'khoa-hoc/cac-khoa-tieng-nhat-JLPT/khoa-hoc-tieng-nhat-n42',
    component: JlptChildrenN42Component
  },
  {
    path : 'cac-khoa-tieng-nhat-JLPT/khoa-hoc-tieng-nhat-n31',
    component: JlptChildrenN31Component
  },
  {
    path : 'khoa-hoc/cac-khoa-tieng-nhat-JLPT/khoa-hoc-tieng-nhat-n32',
    component: JlptChildrenN32Component
  },
  {
    path: 'tai-sao-chon-QNU-Japan-Center',
    component: WhyChooseJpcenterComponent
  },
  {
    path: 'lich-khai-giang',
    component: OpeningScheduleComponent
  },
  {
    path: 'tin-tuc-su-kien',
    component: NewspageComponent
  },
   {
    path: 'co-hoi-nghe-nghiep',
    component: CareerOpportunitiesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StudentComponent,
    HeaderComponent,
    CourseComponent,
    ScheduleComponent,
    ResultComponent,
    RegisterComponent,
    NewsComponent,
    EventComponent,
	  SlideComponent,
    SubMenuComponent,
    IntroductionComponent,
    IntroductionOneComponent,
    IntroductionTwoComponent,
    IntroductionThreeComponent,
    IntroductionFourComponent,
    NewspageComponent,
    HomeComponent,
    CoursesComponent,
    CareerOpportunitiesComponent,
    ServicePartnerComponent,
    OpeningScheduleComponent,
    JapanCenterComponent,
    EnterpriseComponent,
    BreadcrumbsComponent,
    SkillsComponent,
    JlptComponent,
    ChildrenComponent,
    JlptChildrenComponent, 
    WhyChooseJpcenterComponent,
	  JlptChildrenN52Component,
    JlptChildrenN41Component,
    JlptChildrenN42Component,
    JlptChildrenN31Component,
    JlptChildrenN32Component,
    StudyComponent,
    LaborComponent,
    ProjectsComponent,
    PartnerComponent,
    LoadingComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule, 
    RouterModule.forRoot(routes)
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
