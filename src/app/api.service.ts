import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:3000";
  nbaurl = "https://stats.nba.com/stats/leagueLeaders"
  playerURL = "https://stats.nba.com/stats/playerdashboardbyyearoveryear"
  httpHeaders = new HttpHeaders({
  "accept": "application/json, text/plain, */*",
  // "accept-encoding": "gzip, deflate, br",
  "accept-language": "en-US,en;q=0.9",
  // "origin": "https://www.nba.com",
  "referer": "https://www.nba.com/",
  // "sec-fetch-dest": "empty",
  // "sec-fetch-mode": "cors",
  // "sec-fetch-site": "same-site",
  // "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.66",
  "x-nba-stats-origin": "stats",
  "x-nba-stats-token": "true"
  });

  params = new HttpParams()
    .set("LeagueID","00")
    .set("PerMode","PerGame")
    .set("Scope","S")
    .set("Season","2020-21")
    .set("SeasonType","Regular+Season")
    .set("StatCategory","PTS");
  
  param = new HttpParams()
    .set("DateFrom", "")
    .set("DateTo", "")
    .set("GameSegment", "")
    .set("LastNGames", "0")
    .set("LeagueID", "00")
    .set("Location", "")
    .set("MeasureType", "Base")
    .set("Month", "0")
    .set("OpponentTeamID", "0")
    .set("Outcome", "")
    .set("PORound", "0")
    .set("PaceAdjust", "N")
    .set("PerMode", "PerGame")
    .set("Period", "0")
    .set("PlayerID", "1629628")
    .set("PlusMinus", "N")
    .set("Rank", "N")
    .set("Season", "2020-21")
    .set("SeasonSegment", "")
    .set("SeasonType", "Regular+Season")
    .set("ShotClockRange", "")
    .set("Split", "yoy")
    .set("VsConference", "")
    .set("VsDivision", "")

  constructor(private http: HttpClient, private router: Router) { }

  getProducts(): Observable<any>{
    return this.http.get(this.nbaurl, {headers: this.httpHeaders, params: this.params});
  }

  getPlayer(): Observable<any>{
    return this.http.get(this.playerURL, {headers: this.httpHeaders, params: this.param});
  }
}