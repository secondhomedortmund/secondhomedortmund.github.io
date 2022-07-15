<template>
  <div>
    <div class="content w3layouts-agile-info">
      <div class="contact">
        <div class="container">
          <h2>Kontaktieren Sie uns!</h2>
          <div class="contact-info">
            <div class="col-md-4 contact-grid-w3l-agile">
              <div class="normal-text">
                <p><span class="orange-text">SECOND</span> HOME</p>
                <p>Hans-Litten-Str. 12, 44135 Dortmund</p>
                <p>Ansprechpartner: Sebastian Rusert</p>
                <p>Telephone : +49 1514 0484848</p>
                <p>
                  E-Mail :
                  <a
                    href="mailto:kontakt@secondhome-dortmund.de?Subject=Anfrage Second Home"
                    >kontakt@secondhome-dortmund.de</a
                  >
                </p>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="google-map">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJeYys7VsXuUcRKqCNaau-jI4&key=AIzaSyCd70ADaA824M9iTqX8U7bBiQ1-lAbjkRU"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2">
          <!-- <h4>Kontaktformular</h4> -->

          <form
            id="contact-form"
            method="post"
            action="contact.php"
            role="form"
          >
            <div class="messages"></div>

            <div class="controls">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_name" class="normal-text">Vorname *</label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Geben Sie ihren Vornamen ein *"
                      required="required"
                      data-error="Vorname erforderlich."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_lastname" class="normal-text"
                      >Nachname *</label
                    >
                    <input
                      id="form_lastname"
                      type="text"
                      name="surname"
                      class="form-control"
                      placeholder="Geben Sie ihren Nachnamen ein *"
                      required="required"
                      data-error="Nachname erforderlich."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_email" class="normal-text">E-Mail *</label>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Bitte geben Sie ihre E-Mail Adresse ein *"
                      required="required"
                      data-error="Gültige E-Mail Adresse erforderlich."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_phone" class="normal-text">Telefon</label>
                    <input
                      id="form_phone"
                      type="tel"
                      name="phone"
                      class="form-control"
                      placeholder="Bitte geben Sie ihre Telefonnummer ein"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div class="row bottom-buffer">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="form_message" class="normal-text"
                      >Nachricht *</label
                    >
                    <textarea
                      id="form_message"
                      name="message"
                      class="form-control"
                      placeholder="Ihre Nachricht an uns *"
                      rows="4"
                      required="required"
                      data-error="Bitte hinterlassen Sie eine Nachricht."
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <p class="text-muted pull-right">
                      <strong>*</strong> Diese Felder sind erforderlich.
                    </p>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <div
                      class="g-recaptcha"
                      data-sitekey="6LduPysUAAAAAJOUlLEoPOHqyJZK4VhwZoD_MUtT"
                      data-callback="verifyRecaptchaCallback"
                      data-expired-callback="expiredRecaptchaCallback"
                    ></div>
                    <input
                      class="form-control hidden"
                      data-recaptcha="true"
                      required
                      data-error="Bitte füllen Sie das Captcha aus."
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-md-12">
                  <input
                    type="submit"
                    class="btn btn-success btn-send kontakt-button"
                    value="Nachricht abschicken"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <!-- /.8 -->
      </div>
      <!-- /.row-->
    </div>
  </div>
</template>