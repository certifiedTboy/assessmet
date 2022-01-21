let selectValue = document.getElementById("category");

selectValue.addEventListener("change", () => {
  let newSelectedValue = selectValue.value.toString();

  if (newSelectedValue === "Phone") {
    let formInput = document.getElementById("formInput");

    formInput.innerHTML = `<form method="POST" action="/varieties/3" enctype="multipart/form-data">
    <div class="form-group">
        <input class="form-control" type="text" name="brand" id="" placeholder="Brand e.g Infinix, Tecno, Iphone">
    </div><br>
    <select name="condition">
    <option> Phone Condition</option>
    <option value="New">New</option>
    <option value="Used">Used</option>
    </select> <br> <br>
    <div class="form-group">
        <input class="form-control" type="text" name="color" placeholder="color"/>
    </div><br>
    <div class="form-group">
        <input class="form-control" type="text" name="model" placeholder="model"/>
    </div><br>
    <div class="form-group">
        <input class="form-control" type="text" name="quantity"  placeholder="quantity"/>
    </div><br>
    <div class="form-group">
    <input class="form-control" type="text" name="ram"  placeholder="Ram e.g 500mb, 1gb, 2gb, 3gb, 4gb"/>
</div><br>
<div class="form-group">
    <input class="form-control" type="number" name="price"  placeholder="Price"/>
    </div><br>
    <div class="form-group">
        <input class="form-control" type="file" name="pics" placeholder="image" multiple/>
    </div> <br>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button class="btn btn-primary" type="submit"> Submit</button>
  </div>
    `;
  }

  if (newSelectedValue === "Houses") {
    let formInput = document.getElementById("formInput");

    formInput.innerHTML = `<form method="POST" action="/varieties/2" enctype="multipart/form-data">

    <div class="form-group">
        <input class="form-control" type="text" name="location" placeholder="Lcoation"/>
    </div><br>
    <div class="form-group">
        <input class="form-control" type="text" name="state" placeholder="Furnished or Unfurnished"/>
    </div><br>
    <div class="form-group">
        <input class="form-control" type="text" name="type"  placeholder="Flat, Duplex, Bungalow"/>
    </div><br>
    <div class="form-group">
    <input class="form-control" type="text" name="address"  placeholder="House Address"/>
    </div><br>
    <div class="form-group">
    <input class="form-control" type="number" name="price"  placeholder="Price"/>
    </div><br>
    <div class="form-group">
        <input class="form-control" type="file" name="pics" placeholder="image" multiple/>
    </div> <br>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button class="btn btn-primary" type="submit"> Submit</button>
  </div>
    `;
  }

  if (newSelectedValue === "Vehicles") {
    let formInput = document.getElementById("formInput");

    formInput.innerHTML = `<form method="POST" action="/varieties/1" enctype="multipart/form-data">
    <div class="form-group">
        <input class="form-control" type="text" name="brand" id="" placeholder="Brand ">
    </div><br>
    <select name="condition">
    <option> Vehicle Condition</option>
    <option value="New"> New</option>
    <option value="Used">Used</option>
    </select> <br> <br>
    <div class="form-group">
        <input class="form-control" type="text" name="color" placeholder="color"/>
    </div><br>
    <div class="form-group">
        <input class="form-control" type="text" name="model" placeholder="model"/>
    </div><br>
    <div class="form-group">
    <input class="form-control" type="number" name="price"  placeholder="Price"/>
    </div><br>
    
    <div class="form-group">
        <input class="form-control" type="file" name="pics" placeholder="image" multiple/>
    </div> <br>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button class="btn btn-primary" type="submit"> Submit</button>
  </div>
    `;
  }
});
