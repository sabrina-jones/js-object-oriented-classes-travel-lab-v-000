class Driver{
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year);
    let yearsExperience = endDate.getYear() - this.startDate.getYear();
    return yearsExperience + 1;
  }
}

class Route{
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){

    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

    let avenues = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    function Avenue(avenueName){
      if (avenues.includes(avenueName)){
        return avenues.indexOf(avenueName);
      }
    }

    let horizontalDistance = Avenue(this.endingLocation.horizontal) - Avenue(this.beginningLocation.horizontal);
    return verticalDistance + horizontalDistance;
  }

  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
