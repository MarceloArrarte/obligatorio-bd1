function parseStringAsDate(dateString: string): Date {
    const dateParts = dateString.split('-').map((value: string) => parseInt(value));
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
}

function parseStringAsTime(timeString: string): Date {
    const timeParts = timeString.split(':');
    while (timeParts.length < 3) {
      timeParts.unshift('0');
    }

    const millisPointIndex = timeParts[2].indexOf('.');
    if (millisPointIndex > -1) {
      timeParts.push(timeParts[2].slice(millisPointIndex + 1));
    }

    const parsedValues = timeParts.map((value: string) => parseInt(value));

    return new Date(0, 0, 0, ...parsedValues);
}

export {
  parseStringAsDate,
  parseStringAsTime
}