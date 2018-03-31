function obsConstructor(n) {
  obj = {};
  obj.num = n;
  var positions = [];
  for (var i = 0; i < obj.num; i++) {
    if (i % 2 == 0) {
      positions.push(
          1.4,  0.0,  0.5-20*i,
          1.0,  1.0,  0.5-20*i,
         -1.4,  0.0,  0.5-20*i,
         -1.0, -1.0,  0.5-20*i,
        )
    }
    else if (i % 2 == 1) {
      positions.push(
         -1.4,  0.0,  0.5-20*i,
         -1.0, -1.0,  0.5-20*i,
          1.0, -1.0,  0.5-20*i,
          1.4,  0.0,  0.5-20*i,
        )
    }
  }
  var c = [1.0, 0.0, 0.0, 0.7];
  var colors = [];
  for (var i = 0; i < obj.num; i++) {
    colors = colors.concat(c, c, c, c);
  }
  var indices = [];
  for (var i = 0; i < obj.num; i++) {
    indices.push(4*i, 4*i + 1, 4*i + 2, 4*i, 4*i + 2, 4*i + 3);
  }
  obj.textureCoordinates = [];
  for (var i=0; i<4800; i++){
    obj.textureCoordinates.push(
      // Front
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
      // Back
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
      // Top
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
      // Bottom
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
      // Right
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
      // Left
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
      // l
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
      // l2
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
    );
  }

  obj.positions = positions;
  obj.colors = colors;
  obj.indices = indices;
  return obj;
}
