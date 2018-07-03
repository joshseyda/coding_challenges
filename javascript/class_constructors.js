/* class Surgeon {//creates class of surgeons
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name(){//returns name of doctor
    return this._name;
  }
  get department(){//returns department
    return this._department;
  }
  get remainingVacationDays(){//returns remaining vacation days
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {//subtracts days off from remaining vacation days
   var result = this._remainingVacationDays - daysOff;
    this._remainingVacationDays = result;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);
*/
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;

    }
    static generatePassword() {
        var pass = Math.floor(Math.random() * 10000);
        return pass;
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
    get certifications() {
        return this._certifications;
    }
    addCertification(newCertification) {
        this.certifications.push([this.newCertification]);
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
    }
}